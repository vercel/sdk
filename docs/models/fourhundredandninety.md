# FourHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinety } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FourHundredAndNinety = {
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