# OneHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyThree } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyThree = {
  appName: "<value>",
  scopes: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `appName`          | *string*           | :heavy_check_mark: | N/A                |
| `scopes`           | *string*[]         | :heavy_check_mark: | N/A                |