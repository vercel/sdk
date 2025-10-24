# UpdateSharedEnvVariableError

## Example Usage

```typescript
import { UpdateSharedEnvVariableError } from "@vercel/sdk/models/updatesharedenvvariableop.js";

let value: UpdateSharedEnvVariableError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `code`                                                    | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `message`                                                 | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `key`                                                     | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `envVarId`                                                | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `envVarKey`                                               | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `action`                                                  | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `link`                                                    | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `value`                                                   | *models.UpdateSharedEnvVariableValue*                     | :heavy_minus_sign:                                        | N/A                                                       |
| `gitBranch`                                               | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `target`                                                  | *models.UpdateSharedEnvVariableEnvironmentResponseTarget* | :heavy_minus_sign:                                        | N/A                                                       |
| `project`                                                 | *string*                                                  | :heavy_minus_sign:                                        | N/A                                                       |