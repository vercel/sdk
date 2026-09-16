# DeleteSharedEnvVariableError

## Example Usage

```typescript
import { DeleteSharedEnvVariableError } from "@vercel/sdk/models/deletesharedenvvariableop.js";

let value: DeleteSharedEnvVariableError = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `action`                               | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `code`                                 | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `envVarId`                             | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `envVarKey`                            | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `gitBranch`                            | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `key`                                  | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `link`                                 | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `message`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `project`                              | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `target`                               | *models.DeleteSharedEnvVariableTarget* | :heavy_minus_sign:                     | N/A                                    |
| `value`                                | *models.DeleteSharedEnvVariableValue*  | :heavy_minus_sign:                     | N/A                                    |