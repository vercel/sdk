# OneHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyFour = {
  appName: "<value>",
  nextScopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `appName`          | *string*           | :heavy_check_mark: | N/A                |
| `nextScopes`       | *string*[]         | :heavy_check_mark: | N/A                |