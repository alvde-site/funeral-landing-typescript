interface ICatalogCard {
  title: string;
  desc: string;
  slideSrc: string[];
  src: string;
  price: string;
}

export interface ICatalogProps {
  onImageClick: (imageSrc: IPortfolioImage | ICatalogCard | string) => void;
}

export interface ICatalogCardProps extends ICatalogProps {
  catalogCard: ICatalogCard;
  key: number;
}

interface IFaqDataItem {
  question: string;
  answer: string;
}

interface IFaqDataItems extends Array<IFaqDataItem> {}

export interface IFaqProps {
  questionsDataList: IFaqDataItems;
}

export interface IFaqQuestionProps {
  questionData: IFaqDataItem;
  key: string;
}

export interface IPortfolioImage {
  src?: string;
  slideSrc?: string[];
  isOpen?: boolean;
}

interface IPortfolioImages extends Array<IPortfolioImage> {}

export interface IPortfolioProps extends ICatalogProps {
  portfolioImages: IPortfolioImages;
}

export interface IPortfolioImageProps extends ICatalogProps {
  portfolioImage: IPortfolioImage;
  key: number;
}

export interface IServiceData {
  title: string;
  desc: string;
  image: string;
  price: string;
}

export interface IServiceProps {
  servicesData: IServiceData[];
}

export interface IServiceCardProps {
  servicesCard: IServiceData;
}

export interface IMainProps {
  portfolioImages: IPortfolioImage[];
  servicesData: IServiceData[];
  questionsDataList: IFaqDataItem[];
  onImageClick: (imageSrc: IPortfolioImage | ICatalogCard | string) => void;
}

export interface IImageViewingProps {
  slideImages: string[];
}

export interface ITopnavProps {
  isToggleBurger: boolean;
  onToggleBurger: () => void;
}
