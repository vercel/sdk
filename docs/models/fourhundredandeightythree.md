# FourHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyThree } from "@vercel/sdk/models/usereventpayloadtargetkind.js";

let value: FourHundredAndEightyThree = {
  organizationId: "<id>",
  teamIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `teamIds`          | *string*[]         | :heavy_check_mark: | N/A                |