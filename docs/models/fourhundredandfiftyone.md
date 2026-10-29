# FourHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyOne } from "@vercel/sdk/models/usereventpayload387scope.js";

let value: FourHundredAndFiftyOne = {
  organizationId: "<id>",
  teamIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `teamIds`          | *string*[]         | :heavy_check_mark: | N/A                |