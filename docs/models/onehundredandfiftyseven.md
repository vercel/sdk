# OneHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftySeven = {
  appName: "<value>",
  scopes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `appName`          | *string*           | :heavy_check_mark: | N/A                |
| `scopes`           | *string*[]         | :heavy_check_mark: | N/A                |