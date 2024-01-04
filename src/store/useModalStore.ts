import create from 'zustand';
interface storeModal {
    SubTotalKH?: number;
    SubTotalUSD?: number;
    setModalData: (subTotalUSD: number) => void;
    propModalData?: number;
}

const useModalStore = create<storeModal>((set) => ({
    propValue: 0,
    setModalData: (subTotalUSD: number) => set({ propModalData: subTotalUSD }),
}));
export default useModalStore;
