# FourHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyEight } from "@vercel/sdk/models/usereventpayload385type.js";

let value: FourHundredAndFortyEight = {
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