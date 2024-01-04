import create from 'zustand';
interface searchStore {
    searchValue?: string;
    setSearchData: (subTotalUSD: string) => void;
    propSearchData?: string;
}

const useSearchStore = create<searchStore>((set) => ({
    propValue: "",
    setSearchData: (searchValue: string) => set({ propSearchData: searchValue }),
}));
export default useSearchStore;
