import * as $protobuf from "../..";

export namespace jspb {

    namespace test {

        class Empty {
            constructor(properties?: { [k: string]: any });
            public static create(properties?: { [k: string]: any }): jspb.test.Empty;
            public static encode(message: (jspb.test.Empty|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Empty|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Empty;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Empty;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Empty;
            public static from(object: { [k: string]: any }): jspb.test.Empty;
            public static toObject(message: jspb.test.Empty, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        enum OuterEnum {
            FOO = 1,
            BAR = 2
        }

        class EnumContainer {
            constructor(properties?: { [k: string]: any });
            public outerEnum?: number;
            public static create(properties?: { [k: string]: any }): jspb.test.EnumContainer;
            public static encode(message: (jspb.test.EnumContainer|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.EnumContainer|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.EnumContainer;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.EnumContainer;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.EnumContainer;
            public static from(object: { [k: string]: any }): jspb.test.EnumContainer;
            public static toObject(message: jspb.test.EnumContainer, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class Simple1 {
            constructor(properties?: { [k: string]: any });
            public aString: string;
            public aRepeatedString?: string[];
            public aBoolean?: boolean;
            public static create(properties?: { [k: string]: any }): jspb.test.Simple1;
            public static encode(message: (jspb.test.Simple1|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Simple1|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Simple1;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Simple1;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Simple1;
            public static from(object: { [k: string]: any }): jspb.test.Simple1;
            public static toObject(message: jspb.test.Simple1, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class Simple2 {
            constructor(properties?: { [k: string]: any });
            public aString: string;
            public aRepeatedString?: string[];
            public static create(properties?: { [k: string]: any }): jspb.test.Simple2;
            public static encode(message: (jspb.test.Simple2|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Simple2|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Simple2;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Simple2;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Simple2;
            public static from(object: { [k: string]: any }): jspb.test.Simple2;
            public static toObject(message: jspb.test.Simple2, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class SpecialCases {
            constructor(properties?: { [k: string]: any });
            public normal: string;
            public default: string;
            public function: string;
            public var: string;
            public static create(properties?: { [k: string]: any }): jspb.test.SpecialCases;
            public static encode(message: (jspb.test.SpecialCases|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.SpecialCases|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.SpecialCases;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.SpecialCases;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.SpecialCases;
            public static from(object: { [k: string]: any }): jspb.test.SpecialCases;
            public static toObject(message: jspb.test.SpecialCases, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class OptionalFields {
            constructor(properties?: { [k: string]: any });
            public aString?: string;
            public aBool: boolean;
            public aNestedMessage?: jspb.test.OptionalFields.Nested;
            public aRepeatedMessage?: jspb.test.OptionalFields.Nested[];
            public aRepeatedString?: string[];
            public static create(properties?: { [k: string]: any }): jspb.test.OptionalFields;
            public static encode(message: (jspb.test.OptionalFields|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.OptionalFields|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OptionalFields;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OptionalFields;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.OptionalFields;
            public static from(object: { [k: string]: any }): jspb.test.OptionalFields;
            public static toObject(message: jspb.test.OptionalFields, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace OptionalFields {

            class Nested {
                constructor(properties?: { [k: string]: any });
                public anInt?: number;
                public static create(properties?: { [k: string]: any }): jspb.test.OptionalFields.Nested;
                public static encode(message: (jspb.test.OptionalFields.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.OptionalFields.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OptionalFields.Nested;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OptionalFields.Nested;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.OptionalFields.Nested;
                public static from(object: { [k: string]: any }): jspb.test.OptionalFields.Nested;
                public static toObject(message: jspb.test.OptionalFields.Nested, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        class HasExtensions {
            constructor(properties?: { [k: string]: any });
            public str1?: string;
            public str2?: string;
            public str3?: string;
            public static create(properties?: { [k: string]: any }): jspb.test.HasExtensions;
            public static encode(message: (jspb.test.HasExtensions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.HasExtensions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.HasExtensions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.HasExtensions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.HasExtensions;
            public static from(object: { [k: string]: any }): jspb.test.HasExtensions;
            public static toObject(message: jspb.test.HasExtensions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class Complex {
            constructor(properties?: { [k: string]: any });
            public aString: string;
            public anOutOfOrderBool: boolean;
            public aNestedMessage?: jspb.test.Complex.Nested;
            public aRepeatedMessage?: jspb.test.Complex.Nested[];
            public aRepeatedString?: string[];
            public static create(properties?: { [k: string]: any }): jspb.test.Complex;
            public static encode(message: (jspb.test.Complex|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Complex|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Complex;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Complex;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Complex;
            public static from(object: { [k: string]: any }): jspb.test.Complex;
            public static toObject(message: jspb.test.Complex, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Complex {

            class Nested {
                constructor(properties?: { [k: string]: any });
                public anInt: number;
                public static create(properties?: { [k: string]: any }): jspb.test.Complex.Nested;
                public static encode(message: (jspb.test.Complex.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.Complex.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Complex.Nested;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Complex.Nested;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.Complex.Nested;
                public static from(object: { [k: string]: any }): jspb.test.Complex.Nested;
                public static toObject(message: jspb.test.Complex.Nested, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        class OuterMessage {
            constructor(properties?: { [k: string]: any });
            public static create(properties?: { [k: string]: any }): jspb.test.OuterMessage;
            public static encode(message: (jspb.test.OuterMessage|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.OuterMessage|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OuterMessage;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OuterMessage;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.OuterMessage;
            public static from(object: { [k: string]: any }): jspb.test.OuterMessage;
            public static toObject(message: jspb.test.OuterMessage, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace OuterMessage {

            class Complex {
                constructor(properties?: { [k: string]: any });
                public innerComplexField?: number;
                public static create(properties?: { [k: string]: any }): jspb.test.OuterMessage.Complex;
                public static encode(message: (jspb.test.OuterMessage.Complex|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.OuterMessage.Complex|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.OuterMessage.Complex;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.OuterMessage.Complex;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.OuterMessage.Complex;
                public static from(object: { [k: string]: any }): jspb.test.OuterMessage.Complex;
                public static toObject(message: jspb.test.OuterMessage.Complex, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        class IsExtension {
            constructor(properties?: { [k: string]: any });
            public ext1?: string;
            public static create(properties?: { [k: string]: any }): jspb.test.IsExtension;
            public static encode(message: (jspb.test.IsExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.IsExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.IsExtension;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.IsExtension;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.IsExtension;
            public static from(object: { [k: string]: any }): jspb.test.IsExtension;
            public static toObject(message: jspb.test.IsExtension, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class IndirectExtension {
            constructor(properties?: { [k: string]: any });
            public static create(properties?: { [k: string]: any }): jspb.test.IndirectExtension;
            public static encode(message: (jspb.test.IndirectExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.IndirectExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.IndirectExtension;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.IndirectExtension;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.IndirectExtension;
            public static from(object: { [k: string]: any }): jspb.test.IndirectExtension;
            public static toObject(message: jspb.test.IndirectExtension, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class DefaultValues {
            constructor(properties?: { [k: string]: any });
            public stringField?: string;
            public boolField?: boolean;
            public intField?: (number|$protobuf.Long);
            public enumField?: number;
            public emptyField?: string;
            public bytesField?: Uint8Array;
            public static create(properties?: { [k: string]: any }): jspb.test.DefaultValues;
            public static encode(message: (jspb.test.DefaultValues|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.DefaultValues|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.DefaultValues;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.DefaultValues;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.DefaultValues;
            public static from(object: { [k: string]: any }): jspb.test.DefaultValues;
            public static toObject(message: jspb.test.DefaultValues, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace DefaultValues {

            enum Enum {
                E1 = 13,
                E2 = 77
            }
        }

        class FloatingPointFields {
            constructor(properties?: { [k: string]: any });
            public optionalFloatField?: number;
            public requiredFloatField: number;
            public repeatedFloatField?: number[];
            public defaultFloatField?: number;
            public optionalDoubleField?: number;
            public requiredDoubleField: number;
            public repeatedDoubleField?: number[];
            public defaultDoubleField?: number;
            public static create(properties?: { [k: string]: any }): jspb.test.FloatingPointFields;
            public static encode(message: (jspb.test.FloatingPointFields|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.FloatingPointFields|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.FloatingPointFields;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.FloatingPointFields;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.FloatingPointFields;
            public static from(object: { [k: string]: any }): jspb.test.FloatingPointFields;
            public static toObject(message: jspb.test.FloatingPointFields, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class TestClone {
            constructor(properties?: { [k: string]: any });
            public str?: string;
            public simple1?: jspb.test.Simple1;
            public simple2?: jspb.test.Simple1[];
            public bytesField?: Uint8Array;
            public unused?: string;
            public static create(properties?: { [k: string]: any }): jspb.test.TestClone;
            public static encode(message: (jspb.test.TestClone|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestClone|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestClone;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestClone;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestClone;
            public static from(object: { [k: string]: any }): jspb.test.TestClone;
            public static toObject(message: jspb.test.TestClone, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class CloneExtension {
            constructor(properties?: { [k: string]: any });
            public ext?: string;
            public static create(properties?: { [k: string]: any }): jspb.test.CloneExtension;
            public static encode(message: (jspb.test.CloneExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.CloneExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.CloneExtension;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.CloneExtension;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.CloneExtension;
            public static from(object: { [k: string]: any }): jspb.test.CloneExtension;
            public static toObject(message: jspb.test.CloneExtension, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class TestGroup {
            constructor(properties?: { [k: string]: any });
            public repeatedGroup?: jspb.test.TestGroup.RepeatedGroup[];
            public requiredGroup: jspb.test.TestGroup.RequiredGroup;
            public optionalGroup?: jspb.test.TestGroup.OptionalGroup;
            public id?: string;
            public requiredSimple: jspb.test.Simple2;
            public optionalSimple?: jspb.test.Simple2;
            public static create(properties?: { [k: string]: any }): jspb.test.TestGroup;
            public static encode(message: (jspb.test.TestGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup;
            public static from(object: { [k: string]: any }): jspb.test.TestGroup;
            public static toObject(message: jspb.test.TestGroup, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace TestGroup {

            class RepeatedGroup {
                constructor(properties?: { [k: string]: any });
                public id: string;
                public someBool?: boolean[];
                public static create(properties?: { [k: string]: any }): jspb.test.TestGroup.RepeatedGroup;
                public static encode(message: (jspb.test.TestGroup.RepeatedGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.TestGroup.RepeatedGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.RepeatedGroup;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.RepeatedGroup;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.RepeatedGroup;
                public static from(object: { [k: string]: any }): jspb.test.TestGroup.RepeatedGroup;
                public static toObject(message: jspb.test.TestGroup.RepeatedGroup, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            class RequiredGroup {
                constructor(properties?: { [k: string]: any });
                public id: string;
                public static create(properties?: { [k: string]: any }): jspb.test.TestGroup.RequiredGroup;
                public static encode(message: (jspb.test.TestGroup.RequiredGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.TestGroup.RequiredGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.RequiredGroup;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.RequiredGroup;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.RequiredGroup;
                public static from(object: { [k: string]: any }): jspb.test.TestGroup.RequiredGroup;
                public static toObject(message: jspb.test.TestGroup.RequiredGroup, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            class OptionalGroup {
                constructor(properties?: { [k: string]: any });
                public id: string;
                public static create(properties?: { [k: string]: any }): jspb.test.TestGroup.OptionalGroup;
                public static encode(message: (jspb.test.TestGroup.OptionalGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.TestGroup.OptionalGroup|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup.OptionalGroup;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup.OptionalGroup;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup.OptionalGroup;
                public static from(object: { [k: string]: any }): jspb.test.TestGroup.OptionalGroup;
                public static toObject(message: jspb.test.TestGroup.OptionalGroup, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        class TestGroup1 {
            constructor(properties?: { [k: string]: any });
            public group?: jspb.test.TestGroup.RepeatedGroup;
            public static create(properties?: { [k: string]: any }): jspb.test.TestGroup1;
            public static encode(message: (jspb.test.TestGroup1|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestGroup1|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestGroup1;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestGroup1;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestGroup1;
            public static from(object: { [k: string]: any }): jspb.test.TestGroup1;
            public static toObject(message: jspb.test.TestGroup1, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class TestReservedNames {
            constructor(properties?: { [k: string]: any });
            public extension?: number;
            public static create(properties?: { [k: string]: any }): jspb.test.TestReservedNames;
            public static encode(message: (jspb.test.TestReservedNames|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestReservedNames|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestReservedNames;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestReservedNames;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestReservedNames;
            public static from(object: { [k: string]: any }): jspb.test.TestReservedNames;
            public static toObject(message: jspb.test.TestReservedNames, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class TestReservedNamesExtension {
            constructor(properties?: { [k: string]: any });
            public static create(properties?: { [k: string]: any }): jspb.test.TestReservedNamesExtension;
            public static encode(message: (jspb.test.TestReservedNamesExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestReservedNamesExtension|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestReservedNamesExtension;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestReservedNamesExtension;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestReservedNamesExtension;
            public static from(object: { [k: string]: any }): jspb.test.TestReservedNamesExtension;
            public static toObject(message: jspb.test.TestReservedNamesExtension, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class TestMessageWithOneof {
            constructor(properties?: { [k: string]: any });
            public pone?: string;
            public pthree?: string;
            public rone?: jspb.test.TestMessageWithOneof;
            public rtwo?: string;
            public normalField?: boolean;
            public repeatedField?: string[];
            public aone?: number;
            public atwo?: number;
            public bone?: number;
            public btwo?: number;
            public partialOneof?: string;
            public recursiveOneof?: string;
            public defaultOneofA?: string;
            public defaultOneofB?: string;
            public static create(properties?: { [k: string]: any }): jspb.test.TestMessageWithOneof;
            public static encode(message: (jspb.test.TestMessageWithOneof|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestMessageWithOneof|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestMessageWithOneof;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestMessageWithOneof;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestMessageWithOneof;
            public static from(object: { [k: string]: any }): jspb.test.TestMessageWithOneof;
            public static toObject(message: jspb.test.TestMessageWithOneof, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class TestEndsWithBytes {
            constructor(properties?: { [k: string]: any });
            public value?: number;
            public data?: Uint8Array;
            public static create(properties?: { [k: string]: any }): jspb.test.TestEndsWithBytes;
            public static encode(message: (jspb.test.TestEndsWithBytes|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestEndsWithBytes|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestEndsWithBytes;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestEndsWithBytes;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestEndsWithBytes;
            public static from(object: { [k: string]: any }): jspb.test.TestEndsWithBytes;
            public static toObject(message: jspb.test.TestEndsWithBytes, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class TestMapFieldsNoBinary {
            constructor(properties?: { [k: string]: any });
            public mapStringString?: { [k: string]: string };
            public mapStringInt32?: { [k: string]: number };
            public mapStringInt64?: { [k: string]: (number|$protobuf.Long) };
            public mapStringBool?: { [k: string]: boolean };
            public mapStringDouble?: { [k: string]: number };
            public mapStringEnum?: { [k: string]: number };
            public mapStringMsg?: { [k: string]: jspb.test.MapValueMessageNoBinary };
            public mapInt32String?: { [k: string]: string };
            public mapInt64String?: { [k: string]: string };
            public mapBoolString?: { [k: string]: string };
            public testMapFields?: jspb.test.TestMapFieldsNoBinary;
            public mapStringTestmapfields?: { [k: string]: jspb.test.TestMapFieldsNoBinary };
            public static create(properties?: { [k: string]: any }): jspb.test.TestMapFieldsNoBinary;
            public static encode(message: (jspb.test.TestMapFieldsNoBinary|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.TestMapFieldsNoBinary|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.TestMapFieldsNoBinary;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.TestMapFieldsNoBinary;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.TestMapFieldsNoBinary;
            public static from(object: { [k: string]: any }): jspb.test.TestMapFieldsNoBinary;
            public static toObject(message: jspb.test.TestMapFieldsNoBinary, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        enum MapValueEnumNoBinary {
            MAP_VALUE_FOO_NOBINARY = 0,
            MAP_VALUE_BAR_NOBINARY = 1,
            MAP_VALUE_BAZ_NOBINARY = 2
        }

        class MapValueMessageNoBinary {
            constructor(properties?: { [k: string]: any });
            public foo?: number;
            public static create(properties?: { [k: string]: any }): jspb.test.MapValueMessageNoBinary;
            public static encode(message: (jspb.test.MapValueMessageNoBinary|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.MapValueMessageNoBinary|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.MapValueMessageNoBinary;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.MapValueMessageNoBinary;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.MapValueMessageNoBinary;
            public static from(object: { [k: string]: any }): jspb.test.MapValueMessageNoBinary;
            public static toObject(message: jspb.test.MapValueMessageNoBinary, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class Deeply {
            constructor(properties?: { [k: string]: any });
            public static create(properties?: { [k: string]: any }): jspb.test.Deeply;
            public static encode(message: (jspb.test.Deeply|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (jspb.test.Deeply|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): jspb.test.Deeply;
            public static from(object: { [k: string]: any }): jspb.test.Deeply;
            public static toObject(message: jspb.test.Deeply, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Deeply {

            class Nested {
                constructor(properties?: { [k: string]: any });
                public static create(properties?: { [k: string]: any }): jspb.test.Deeply.Nested;
                public static encode(message: (jspb.test.Deeply.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (jspb.test.Deeply.Nested|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply.Nested;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply.Nested;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): jspb.test.Deeply.Nested;
                public static from(object: { [k: string]: any }): jspb.test.Deeply.Nested;
                public static toObject(message: jspb.test.Deeply.Nested, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace Nested {

                class Message {
                    constructor(properties?: { [k: string]: any });
                    public count?: number;
                    public static create(properties?: { [k: string]: any }): jspb.test.Deeply.Nested.Message;
                    public static encode(message: (jspb.test.Deeply.Nested.Message|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: (jspb.test.Deeply.Nested.Message|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jspb.test.Deeply.Nested.Message;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jspb.test.Deeply.Nested.Message;
                    public static verify(message: { [k: string]: any }): string;
                    public static fromObject(object: { [k: string]: any }): jspb.test.Deeply.Nested.Message;
                    public static from(object: { [k: string]: any }): jspb.test.Deeply.Nested.Message;
                    public static toObject(message: jspb.test.Deeply.Nested.Message, options?: $protobuf.ConversionOptions): { [k: string]: any };
                    public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

export namespace google {

    namespace protobuf {

        class FileDescriptorSet {
            constructor(properties?: { [k: string]: any });
            public file?: google.protobuf.FileDescriptorProto[];
            public static create(properties?: { [k: string]: any }): google.protobuf.FileDescriptorSet;
            public static encode(message: (google.protobuf.FileDescriptorSet|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FileDescriptorSet|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;
            public static from(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class FileDescriptorProto {
            constructor(properties?: { [k: string]: any });
            public name?: string;
            public package?: string;
            public dependency?: string[];
            public publicDependency?: number[];
            public weakDependency?: number[];
            public messageType?: google.protobuf.DescriptorProto[];
            public enumType?: google.protobuf.EnumDescriptorProto[];
            public service?: google.protobuf.ServiceDescriptorProto[];
            public extension?: google.protobuf.FieldDescriptorProto[];
            public options?: google.protobuf.FileOptions;
            public sourceCodeInfo?: google.protobuf.SourceCodeInfo;
            public syntax?: string;
            public static create(properties?: { [k: string]: any }): google.protobuf.FileDescriptorProto;
            public static encode(message: (google.protobuf.FileDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FileDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class DescriptorProto {
            constructor(properties?: { [k: string]: any });
            public name?: string;
            public field?: google.protobuf.FieldDescriptorProto[];
            public extension?: google.protobuf.FieldDescriptorProto[];
            public nestedType?: google.protobuf.DescriptorProto[];
            public enumType?: google.protobuf.EnumDescriptorProto[];
            public extensionRange?: google.protobuf.DescriptorProto.ExtensionRange[];
            public oneofDecl?: google.protobuf.OneofDescriptorProto[];
            public options?: google.protobuf.MessageOptions;
            public reservedRange?: google.protobuf.DescriptorProto.ReservedRange[];
            public reservedName?: string[];
            public static create(properties?: { [k: string]: any }): google.protobuf.DescriptorProto;
            public static encode(message: (google.protobuf.DescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.DescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.DescriptorProto;
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            class ExtensionRange {
                constructor(properties?: { [k: string]: any });
                public start?: number;
                public end?: number;
                public static create(properties?: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;
                public static encode(message: (google.protobuf.DescriptorProto.ExtensionRange|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.DescriptorProto.ExtensionRange|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;
                public static from(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            class ReservedRange {
                constructor(properties?: { [k: string]: any });
                public start?: number;
                public end?: number;
                public static create(properties?: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;
                public static encode(message: (google.protobuf.DescriptorProto.ReservedRange|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.DescriptorProto.ReservedRange|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;
                public static from(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        class FieldDescriptorProto {
            constructor(properties?: { [k: string]: any });
            public name?: string;
            public number?: number;
            public label?: number;
            public type?: number;
            public typeName?: string;
            public extendee?: string;
            public defaultValue?: string;
            public oneofIndex?: number;
            public jsonName?: string;
            public options?: google.protobuf.FieldOptions;
            public static create(properties?: { [k: string]: any }): google.protobuf.FieldDescriptorProto;
            public static encode(message: (google.protobuf.FieldDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FieldDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        class OneofDescriptorProto {
            constructor(properties?: { [k: string]: any });
            public name?: string;
            public options?: google.protobuf.OneofOptions;
            public static create(properties?: { [k: string]: any }): google.protobuf.OneofDescriptorProto;
            public static encode(message: (google.protobuf.OneofDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.OneofDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class EnumDescriptorProto {
            constructor(properties?: { [k: string]: any });
            public name?: string;
            public value?: google.protobuf.EnumValueDescriptorProto[];
            public options?: google.protobuf.EnumOptions;
            public static create(properties?: { [k: string]: any }): google.protobuf.EnumDescriptorProto;
            public static encode(message: (google.protobuf.EnumDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.EnumDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class EnumValueDescriptorProto {
            constructor(properties?: { [k: string]: any });
            public name?: string;
            public number?: number;
            public options?: google.protobuf.EnumValueOptions;
            public static create(properties?: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;
            public static encode(message: (google.protobuf.EnumValueDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.EnumValueDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class ServiceDescriptorProto {
            constructor(properties?: { [k: string]: any });
            public name?: string;
            public method?: google.protobuf.MethodDescriptorProto[];
            public options?: google.protobuf.ServiceOptions;
            public static create(properties?: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;
            public static encode(message: (google.protobuf.ServiceDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.ServiceDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class MethodDescriptorProto {
            constructor(properties?: { [k: string]: any });
            public name?: string;
            public inputType?: string;
            public outputType?: string;
            public options?: google.protobuf.MethodOptions;
            public clientStreaming?: boolean;
            public serverStreaming?: boolean;
            public static create(properties?: { [k: string]: any }): google.protobuf.MethodDescriptorProto;
            public static encode(message: (google.protobuf.MethodDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.MethodDescriptorProto|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;
            public static from(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class FileOptions {
            constructor(properties?: { [k: string]: any });
            public javaPackage?: string;
            public javaOuterClassname?: string;
            public javaMultipleFiles?: boolean;
            public javaGenerateEqualsAndHash?: boolean;
            public javaStringCheckUtf8?: boolean;
            public optimizeFor?: number;
            public goPackage?: string;
            public ccGenericServices?: boolean;
            public javaGenericServices?: boolean;
            public pyGenericServices?: boolean;
            public deprecated?: boolean;
            public ccEnableArenas?: boolean;
            public objcClassPrefix?: string;
            public csharpNamespace?: string;
            public uninterpretedOption?: google.protobuf.UninterpretedOption[];
            public static create(properties?: { [k: string]: any }): google.protobuf.FileOptions;
            public static encode(message: (google.protobuf.FileOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FileOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;
            public static from(object: { [k: string]: any }): google.protobuf.FileOptions;
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        class MessageOptions {
            constructor(properties?: { [k: string]: any });
            public messageSetWireFormat?: boolean;
            public noStandardDescriptorAccessor?: boolean;
            public deprecated?: boolean;
            public mapEntry?: boolean;
            public uninterpretedOption?: google.protobuf.UninterpretedOption[];
            public static create(properties?: { [k: string]: any }): google.protobuf.MessageOptions;
            public static encode(message: (google.protobuf.MessageOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.MessageOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;
            public static from(object: { [k: string]: any }): google.protobuf.MessageOptions;
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class FieldOptions {
            constructor(properties?: { [k: string]: any });
            public ctype?: number;
            public packed?: boolean;
            public jstype?: number;
            public lazy?: boolean;
            public deprecated?: boolean;
            public weak?: boolean;
            public uninterpretedOption?: google.protobuf.UninterpretedOption[];
            public static create(properties?: { [k: string]: any }): google.protobuf.FieldOptions;
            public static encode(message: (google.protobuf.FieldOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.FieldOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;
            public static from(object: { [k: string]: any }): google.protobuf.FieldOptions;
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        class OneofOptions {
            constructor(properties?: { [k: string]: any });
            public uninterpretedOption?: google.protobuf.UninterpretedOption[];
            public static create(properties?: { [k: string]: any }): google.protobuf.OneofOptions;
            public static encode(message: (google.protobuf.OneofOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.OneofOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;
            public static from(object: { [k: string]: any }): google.protobuf.OneofOptions;
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class EnumOptions {
            constructor(properties?: { [k: string]: any });
            public allowAlias?: boolean;
            public deprecated?: boolean;
            public uninterpretedOption?: google.protobuf.UninterpretedOption[];
            public static create(properties?: { [k: string]: any }): google.protobuf.EnumOptions;
            public static encode(message: (google.protobuf.EnumOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.EnumOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;
            public static from(object: { [k: string]: any }): google.protobuf.EnumOptions;
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class EnumValueOptions {
            constructor(properties?: { [k: string]: any });
            public deprecated?: boolean;
            public uninterpretedOption?: google.protobuf.UninterpretedOption[];
            public static create(properties?: { [k: string]: any }): google.protobuf.EnumValueOptions;
            public static encode(message: (google.protobuf.EnumValueOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.EnumValueOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;
            public static from(object: { [k: string]: any }): google.protobuf.EnumValueOptions;
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class ServiceOptions {
            constructor(properties?: { [k: string]: any });
            public deprecated?: boolean;
            public uninterpretedOption?: google.protobuf.UninterpretedOption[];
            public static create(properties?: { [k: string]: any }): google.protobuf.ServiceOptions;
            public static encode(message: (google.protobuf.ServiceOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.ServiceOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;
            public static from(object: { [k: string]: any }): google.protobuf.ServiceOptions;
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        class MethodOptions {
            constructor(properties?: { [k: string]: any });
            public deprecated?: boolean;
            public idempotencyLevel?: number;
            public uninterpretedOption?: google.protobuf.UninterpretedOption[];
            public static create(properties?: { [k: string]: any }): google.protobuf.MethodOptions;
            public static encode(message: (google.protobuf.MethodOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.MethodOptions|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;
            public static from(object: { [k: string]: any }): google.protobuf.MethodOptions;
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        class UninterpretedOption {
            constructor(properties?: { [k: string]: any });
            public name?: google.protobuf.UninterpretedOption.NamePart[];
            public identifierValue?: string;
            public positiveIntValue?: (number|$protobuf.Long);
            public negativeIntValue?: (number|$protobuf.Long);
            public doubleValue?: number;
            public stringValue?: Uint8Array;
            public aggregateValue?: string;
            public static create(properties?: { [k: string]: any }): google.protobuf.UninterpretedOption;
            public static encode(message: (google.protobuf.UninterpretedOption|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.UninterpretedOption|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;
            public static from(object: { [k: string]: any }): google.protobuf.UninterpretedOption;
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            class NamePart {
                constructor(properties?: { [k: string]: any });
                public namePart: string;
                public isExtension: boolean;
                public static create(properties?: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;
                public static encode(message: (google.protobuf.UninterpretedOption.NamePart|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.UninterpretedOption.NamePart|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;
                public static from(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        class SourceCodeInfo {
            constructor(properties?: { [k: string]: any });
            public location?: google.protobuf.SourceCodeInfo.Location[];
            public static create(properties?: { [k: string]: any }): google.protobuf.SourceCodeInfo;
            public static encode(message: (google.protobuf.SourceCodeInfo|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.SourceCodeInfo|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;
            public static from(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            class Location {
                constructor(properties?: { [k: string]: any });
                public path?: number[];
                public span?: number[];
                public leadingComments?: string;
                public trailingComments?: string;
                public leadingDetachedComments?: string[];
                public static create(properties?: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;
                public static encode(message: (google.protobuf.SourceCodeInfo.Location|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.SourceCodeInfo.Location|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;
                public static from(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        class GeneratedCodeInfo {
            constructor(properties?: { [k: string]: any });
            public annotation?: google.protobuf.GeneratedCodeInfo.Annotation[];
            public static create(properties?: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;
            public static encode(message: (google.protobuf.GeneratedCodeInfo|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: (google.protobuf.GeneratedCodeInfo|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;
            public static verify(message: { [k: string]: any }): string;
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;
            public static from(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            class Annotation {
                constructor(properties?: { [k: string]: any });
                public path?: number[];
                public sourceFile?: string;
                public begin?: number;
                public end?: number;
                public static create(properties?: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;
                public static encode(message: (google.protobuf.GeneratedCodeInfo.Annotation|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: (google.protobuf.GeneratedCodeInfo.Annotation|{ [k: string]: any }), writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;
                public static verify(message: { [k: string]: any }): string;
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;
                public static from(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
