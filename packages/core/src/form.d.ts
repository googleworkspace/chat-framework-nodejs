import { chat_v1 } from '@googleapis/chat';
/**
 * Wraps a form input value to provide easier parsing and type coercion
 */
export declare class FormInputValue {
    private value;
    constructor(value: chat_v1.Schema$Inputs | undefined);
    /**
     * Whether or not the field is present.
     */
    get exists(): boolean;
    /**
     * Gets the value as a string.
     *
     * @param defaultValue - value to return if not present
     * @return value
     */
    asString(defaultValue?: string): string | undefined;
    /**
     * Gets the value as a string array (if input supports multiple values).
     *
     * @param defaultValue - value to return if not present
     * @return value
     */
    asStringArray(defaultValue?: string[]): string[] | undefined;
    /**
     * Gets the value as a number.
     *
     * @param defaultValue - value to return if not present
     * @return value
     */
    asNumber(defaultValue?: number): number | undefined;
    /**
     * Gets the value as a number array (if input supports multiple values.)
     *
     * @param defaultValue - value to return if not present
     * @return value
     */
    asNumberArray(defaultValue?: number[]): number[] | undefined;
}
/**
 * Utility class for working with form inputs.
 */
export declare class FormInputs {
    private readonly inputs;
    constructor(inputs?: Record<string, chat_v1.Schema$Inputs>);
    /**
     * Fetches an input value. Note that this will always return an object, even if the field
     * is not present.
     *
     * @param key
     */
    get(key: string): FormInputValue;
}
