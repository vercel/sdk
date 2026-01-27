# EightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyThree } from "@vercel/sdk/models/userevent.js";

let value: EightyThree = {
  drainUrl: "https://focused-rawhide.biz/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drainUrl`         | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |