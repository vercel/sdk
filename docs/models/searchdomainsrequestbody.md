# SearchDomainsRequestBody

## Example Usage

```typescript
import { SearchDomainsRequestBody } from "@vercel/sdk/models/searchdomainsop.js";

let value: SearchDomainsRequestBody = {
  domains: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `domains`                       | *string*[]                      | :heavy_check_mark:              | an array of at most 200 item(s) |