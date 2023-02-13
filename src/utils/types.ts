type TPortfolioImage = {
  src?: string;
  slideSrc?: string[];
  isOpen?: boolean;
};

export type TImagePopupProps = {
  portfolioImage: TPortfolioImage;
  onClose: () => void;
  onOverlayClose: (e: Event) => void;
  name: string;
};
