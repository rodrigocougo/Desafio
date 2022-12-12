import Router from 'next/router'
import { SetStateAction, useState } from 'react'
import CBFInputSearch from 'src/components/InputsSearch/Index'

export default function SearchBox() {
  const [valueTextSearch, setValueTextSearch] = useState<string>('');
  const [clearSearch, setClearSearch] = useState<boolean>(false);
  
  const handleSearch = () => {
    if (!valueTextSearch) return
    let value = valueTextSearch.trimStart().trimEnd();
    Router.push({
      pathname: `/busca/`,
        query: {
          search: value.trimStart().trimEnd()
        }
      },
      undefined,
      { shallow: true }
    );
    setClearSearch(!clearSearch)
  }

  const handlerKeyPressSearch = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch()      
    }
  };

  return (
    <CBFInputSearch
      placeholder="Qual curso você está procurando?"
      onChange={(e: { target: { value: SetStateAction<string>; }; }) => setValueTextSearch(e.target.value)}
      onKeyPress={(e: any) => handlerKeyPressSearch(e)}
      onClick={() => handleSearch()}
      clearSearch={clearSearch}
    />
  );
}
