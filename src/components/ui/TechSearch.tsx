import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import Chip from './Chip';

/*
  TODO : dummy 사용 x API요청을 통해 검색하도록 변경
  UI, UX 개선
*/

const dummy = [
  'Android',
  'Angular',
  'Arduino',
  'C',
  'C++',
  'Django',
  'Docker',
  'Electron',
  'Flask',
  'Flutter',
  'Go',
  'Java',
  'JavaScript',
  'Jsp',
  'Kotlin',
  'MariaDB',
  'MongoDB',
  'Mysql',
  'Next.js',
  'Nodejs',
  'Nuxt.js',
  'Objective-C',
  'PHP',
  'Python',
  'React',
  'React-Native',
  'Ruby',
  'Spring Boot',
  'Swift',
  'Tensorflow',
  'Typescript',
  'Vue.js',
  'jQuery',
  'Oracle',
  'Unity',
  'Firebase',
];

const TechSearch = () => {
  const [search, setSearch] = useState('');
  const debouncedSearchValue = useDebounce(search, 500);
  const [searchResults, setSearchResults] = useState<string[]>([]);

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
    const results = dummy.filter((d) => d.includes(debouncedSearchValue));
    setSearchResults(results);
  };

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

  return (
    <div>
      <div className="relative">
        <div className="relative z-10 border border-gray-300 bg-white px-4 py-2">
          <input
            type="text"
            placeholder="직무스킬을 검색해보세요"
            className="outline-0"
            onClick={handleFocus}
            onChange={onChangeHandler}
            value={search}
          />
        </div>
        {isFocused && (
          <div className="absolute z-10 w-full rounded-b-lg bg-white px-4 py-2">
            {searchResults.map((value) => (
              <Chip
                margin="mr-4 my-2"
                label={value}
                onClickHandler={() => {
                  console.log('test');
                }}
              />
            ))}
          </div>
        )}
        <div
          className={overlayClasses}
          onClick={() => {
            handleBlur();
          }}
        ></div>
      </div>
    </div>
  );
};

export default TechSearch;
