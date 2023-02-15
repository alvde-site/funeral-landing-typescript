export type THandleTopnavTopPosition = {
  (topnav: HTMLElement | null): void;
  (): void;
};

export type TPortfolioImage = {
  src?: string;
  slideSrc?: string[];
  isOpen?: boolean;
};

type TReviewList = {
  avatar: string;
  name: string;
  location: string;
  text: string;
};

export type TReviewCardProps = {
  review: TReviewList;
};

export type TImagePopupProps = {
  portfolioImage: TPortfolioImage;
  onClose: () => void;
  onOverlayClose: (e: Event) => void;
  name: string;
};

export type TResult = {
  tilescount: number;
  tilesprice: number;
  curbscount: number;
  curbsprice: number;
  total: number;
  isHiddenResult: boolean;
};

export type TCount = {
  gravescount: number;
  widthcount: number;
  lengthcount: number;
  tilesize: string;
  neededcurbs: boolean;
  onlygraves: boolean;
};

export type TResultProps = {
  result: TResult;
};

export type TPriceLIst = {
  tile30: number;
  tile60: number;
  curb: number;
};

export type TCalculatorProps = {
  onInfoClick: (imageSrc: any) => void;
};
