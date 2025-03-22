export interface countryTypes {
    country: string;

    borders?: any;
    subregion: string;
    name: {
        altSpellings: any;
        Location: any;
        common: string;
    };
    flags: {
        png: string;
        svg: string;
    };
    altSpellings: any;
    population: number;
    region: string;
    capital: string;

}

export interface InputType {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}

export interface ButtonType {
    onClick: () => void
}