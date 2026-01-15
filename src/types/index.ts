export type IMinMax = {
  min: number;
  max: number;
};
export type IAtribut = {
  name: string;
  description: string;
  hypoallergenic: boolean;
  life: IMinMax;
  male_weight: IMinMax;
  female_weight: IMinMax;
};
export type IBreed = {
  id: string;
  type: string;
  attributes: IAtribut;
};

type IMeta = {
  pagination: {
    current: number;
    next: number;
    last: number;
    records: number;
  };
};

export type IBreedResponse = {
  data: IBreed[];
  meta: IMeta;
};
