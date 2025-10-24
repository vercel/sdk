# DeleteSharedEnvVariableRequestBody

## Example Usage

```typescript
import { DeleteSharedEnvVariableRequestBody } from "@vercel/sdk/models/deletesharedenvvariableop.js";

let value: DeleteSharedEnvVariableRequestBody = {
  ids: [
    "env_abc123",
    "env_abc124",
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `ids`                                             | *string*[]                                        | :heavy_check_mark:                                | IDs of the Shared Environment Variables to delete | [<br/>"env_abc123",<br/>"env_abc124"<br/>]        |