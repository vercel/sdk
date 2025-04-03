# UserAgent

## Example Usage

```typescript
import { UserAgent } from "@vercel/sdk/models/userevent.js";

let value: UserAgent = {
  browser: {
    name: "unknown",
  },
  ua: "<value>",
  program: "<value>",
  os: {
    name: "unknown",
  },
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `browser`                              | [models.Browser](../models/browser.md) | :heavy_check_mark:                     | N/A                                    |
| `ua`                                   | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `program`                              | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `os`                                   | [models.Os](../models/os.md)           | :heavy_check_mark:                     | N/A                                    |