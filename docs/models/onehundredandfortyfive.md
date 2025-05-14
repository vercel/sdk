# OneHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyFive = {
  appName: "<value>",
  nextScopes: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `appName`          | *string*           | :heavy_check_mark: | N/A                |
| `nextScopes`       | *string*[]         | :heavy_check_mark: | N/A                |