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
  src: string;
  slideSrc?: string[];
}

interface IPortfolioImages extends Array<IPortfolioImage> {}

export interface IPortfolioProps extends ICatalogProps {
  portfolioImages: IPortfolioImages;
}

export interface IPortfolioImageProps extends ICatalogProps {
  portfolioImage: IPortfolioImage;
  key: number;
}
