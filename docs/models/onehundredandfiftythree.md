# OneHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyThree } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyThree = {
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