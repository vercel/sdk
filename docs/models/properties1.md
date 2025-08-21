# Properties1

## Example Usage

```typescript
import { Properties1 } from "@vercel/sdk/models/getconfigurationproductsop.js";

let value: Properties1 = {
  type: "string",
  uiControl: "input",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | [models.PropertiesType](../models/propertiestype.md)     | :heavy_check_mark:                                       | N/A                                                      |
| `uiControl`                                              | [models.UiControl](../models/uicontrol.md)               | :heavy_check_mark:                                       | N/A                                                      |
| `description`                                            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `minLength`                                              | [models.MinLength](../models/minlength.md)               | :heavy_minus_sign:                                       | N/A                                                      |
| `maxLength`                                              | [models.MaxLength](../models/maxlength.md)               | :heavy_minus_sign:                                       | N/A                                                      |
| `pattern`                                                | [models.Pattern](../models/pattern.md)                   | :heavy_minus_sign:                                       | N/A                                                      |
| `default`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `enum`                                                   | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `uiLabel`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `uiReadOnly`                                             | *models.UiReadOnly*                                      | :heavy_minus_sign:                                       | N/A                                                      |
| `uiHidden`                                               | *models.UiHidden*                                        | :heavy_minus_sign:                                       | N/A                                                      |
| `uiDisabled`                                             | *models.UiDisabled*                                      | :heavy_minus_sign:                                       | N/A                                                      |
| `uiDescription`                                          | *models.UiDescription*                                   | :heavy_minus_sign:                                       | N/A                                                      |
| `uiFormattedValue`                                       | [models.UiFormattedValue](../models/uiformattedvalue.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `uiPlaceholder`                                          | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |