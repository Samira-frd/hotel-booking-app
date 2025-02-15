export interface IHotelData {
    id: string;
    property: IProperty;
    offer: IOffer;
}

export interface IProperty {
    propertyId: string;
    title: string;
    address: string[];
    previewImage: IPreviewImage
    rating: IRating;
}

export interface IPreviewImage {
    url: string;
    caption: string;
    imageType: string;
}

export interface IRating {
    ratingValue: number;
    ratingType: string;
}

export interface IOffer {
    promotion: IPromotion;
    name: string;
    displayPrice: IPrice;
    savings: IPrice | null;
    cancellationOption: ICancelation;
}

export interface IPromotion {
    title: string;
    type: string;
}

export interface IPrice {
    amount: number;
    currency: string;
}

export interface ICancelation {
    cancellationType: string;
}

