import Select, {StylesConfig} from "react-select";

const options: MyOptionType[] = [
    {value: "first", label: "New posts first"},
    {value: "old", label: "Old posts first"},
];

type MyOptionType = {
    label: string;
    value: string;
};
type IsMulti = false;

const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
    control: (provided, state) => {

        return {
            ...provided,
            backgroundColor: 'var(--colors-bg-main)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '36px',
            width: 256,
        };
    },
    option: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
        width: 256,
        color: 'var(--colors-text)',
        backgroundColor: state.isSelected
            ? 'var(--colors-bg)'
            : 'var(--colors-ui-base)',
    }),
    indicatorSeparator: () => ({display: 'none'}),
};

export default function CustomSelect() {
    return (
        <div className="App">
            <Select isSearchable={false} options={options}
                    styles={selectStyle}/>
        </div>
    );
}
