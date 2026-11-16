# FourHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyOne } from "@vercel/sdk/models/payloadcodereviewselection.js";

let value: FourHundredAndSeventyOne = {
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