import pl from '../../public/locales/pl/translation.json';

// Helper type to get nested keys with dot notation
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// Create a type that represents all possible keys in the translation file, including nested ones
export type TFunctionKeys = NestedKeyOf<typeof pl>;
