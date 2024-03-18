export type Profile = {
    id? : string | number;
    name: string;
    image: string;
    onclick ?: () => void;
}