# RequestBodyEvs

## Example Usage

```typescript
import { RequestBodyEvs } from "@vercel/sdk/models/createsharedenvvariableop.js";

let value: RequestBodyEvs = {
  key: "API_URL",
  value: "https://api.vercel.com",
  comment: "database connection string for production",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `key`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | The name of the Shared Environment Variable                              | API_URL                                                                  |
| `value`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The value of the Shared Environment Variable                             | https://api.vercel.com                                                   |
| `comment`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | A comment to add context on what this Shared Environment Variable is for | database connection string for production                                |