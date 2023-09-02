import { useState, useRef, useEffect } from 'react';
import { VscChromeClose, VscSearch } from 'react-icons/vsc';
import Chip from '../ui/Chip';

interface Props {
  closeHandler: () => void;
  callbackSearch: (search?: string) => void;
}

const Search = ({ closeHandler, callbackSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>(
    JSON.parse(localStorage.getItem('searchHistory') || '[]')
  );

  const handleEnterKeyPress = () => {
    const search = inputRef.current?.value;

    if (search) {
      const clone = [...searchHistory].filter((query) => search !== query);
      clone.unshift(search);

      localStorage.setItem('searchHistory', JSON.stringify(clone));
    }
    callbackSearch(search);
    closeHandler();
  };

  const removeAllQueryHistory = () => {
    localStorage.setItem('searchHistory', '[]');
    setSearchHistory([]);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeHandler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeHandler]);

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-white">
      <div className="mx-auto min-h-screen max-w-3xl p-6">
        <div className="mb-6">
          <VscChromeClose
            size={32}
            className="ml-auto"
            onClick={closeHandler}
          />
        </div>
        <div className="mb-10 flex h-14 flex-auto items-center rounded-2xl border border-gray-300 bg-white px-4">
          <VscSearch size={20} style={{ marginRight: '8px' }} color="#525252" />
          <input
            ref={inputRef}
            type="text"
            placeholder="검색어를 입력해주세요"
            className="h-full w-full text-lg outline-0"
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                handleEnterKeyPress();
              }
            }}
          />
        </div>
        <div>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg">최근 검색어</span>
            <span
              className="text-base text-B500"
              onClick={removeAllQueryHistory}
            >
              전체삭제
            </span>
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              {searchHistory.map((query: string) => (
                <Chip
                  key={query}
                  id={query}
                  label={query}
                  onClickHandler={() => {
                    if (inputRef.current) {
                      inputRef.current.value = query;
                      handleEnterKeyPress();
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
