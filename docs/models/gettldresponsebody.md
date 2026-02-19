# GetTldResponseBody

Success

## Example Usage

```typescript
import { GetTldResponseBody } from "@vercel/sdk/models/gettldop.js";

let value: GetTldResponseBody = {
  supportedLanguageCodes: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `supportedLanguageCodes`                                                                                                    | Record<string, *string*>                                                                                                    | :heavy_check_mark:                                                                                                          | The language codes that are supported for the TLD. The key is the language code, and the value is the name of the language. |