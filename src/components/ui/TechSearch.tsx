import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import Chip from './Chip';
import { VscSearch, VscRefresh } from 'react-icons/vsc';
import axios from 'axios';
import { Skill } from '../../types/user';

interface Props {
  selectedTechIds: number[];
  onTechSelect: (skill: Skill) => void;
  onResetHandler?: () => void;
}

const TechSearch = ({
  selectedTechIds,
  onTechSelect,
  onResetHandler,
}: Props) => {
  const [search, setSearch] = useState('');
  const debouncedSearchValue = useDebounce(search, 500);
  const [searchResults, setSearchResults] = useState<Skill[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [popularKeywords, setPopularKeywords] = useState<Skill[]>([]);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  const findSearchResults = () => {
    const results = skills.filter(({ name }) =>
      name
        .toLocaleLowerCase()
        .includes(debouncedSearchValue.toLocaleLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    const getSkillList = async () => {
      const { data } = await axios.get('/api/skills');
      setSkills(data.skills);
    };

    getSkillList();
  }, []);

  useEffect(() => {
    const getPopularKeywords = async () => {
      const { data } = await axios.get('/api/skills/rank');
      setPopularKeywords(data.skills);
    };

    getPopularKeywords();
  }, []);

  useEffect(() => {
    if (debouncedSearchValue) {
      findSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchValue]);

  const overlayClasses = `fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
    isFocused ? 'opacity-100' : 'opacity-0 pointer-events-none'
  }`;

  const content = (() => {
    if (!debouncedSearchValue) {
      return (
        <div>
          <p className="mb-4 text-center text-sm font-medium text-B900">
            많이 찾는 기술 스택
          </p>
          <div className="flex flex-wrap gap-4">
            {popularKeywords.map(({ name, id }) => (
              <Chip
                key={name + id}
                id={id}
                label={name}
                isActive={selectedTechIds.includes(id)}
                onClickHandler={() => {
                  onTechSelect({ name, id });
                }}
              />
            ))}
          </div>
        </div>
      );
    } else if (!!debouncedSearchValue && !searchResults.length) {
      return (
        <p className="text-center text-sm font-medium text-B500">
          검색 결과가 없습니다.
          <br />
          다른 키워드를 검색해보세요.
        </p>
      );
    } else {
      return (
        <div>
          <p className="mb-4 text-center text-sm font-medium text-B900">
            <span className="font-bold">{`'${debouncedSearchValue}' `}</span>
            검색 결과
          </p>
          <div className="flex flex-wrap gap-4">
            {searchResults.map(({ name, id }) => (
              <Chip
                key={name + id}
                id={id}
                label={name}
                isActive={selectedTechIds.includes(id)}
                onClickHandler={() => {
                  onTechSelect({ name, id });
                }}
              />
            ))}
          </div>
        </div>
      );
    }
  })();

  return (
    <div className="relative">
      <div className="relative z-10 flex items-center rounded-t-lg bg-white p-4">
        <div className="flex h-9 flex-auto items-center rounded-2xl border border-gray-300 bg-white px-4">
          <VscSearch size={16} style={{ marginRight: '8px' }} color="#525252" />
          <input
            type="text"
            placeholder="직무스킬을 검색해보세요"
            className="w-full text-base outline-0"
            onClick={handleFocus}
            onChange={onChangeHandler}
            value={search}
          />
        </div>
        {onResetHandler && (
          <span
            className="ml-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-300"
            onClick={onResetHandler}
          >
            <VscRefresh size={16} />
          </span>
        )}
      </div>
      {isFocused && (
        <div className="absolute z-10 w-full rounded-b-lg border-t border-gray-300 bg-white p-4">
          {content}
        </div>
      )}
      <div
        className={overlayClasses}
        onClick={() => {
          handleBlur();
        }}
      ></div>
    </div>
  );
};

export default TechSearch;
