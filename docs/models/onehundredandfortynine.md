# OneHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyNine = {
  appName: "<value>",
  nextScopes: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `appName`          | *string*           | :heavy_check_mark: | N/A                |
| `nextScopes`       | *string*[]         | :heavy_check_mark: | N/A                |