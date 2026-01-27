# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/userevent.js";

let value: EightyOne = {
  logDrainUrl: "https://reflecting-guard.name",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `logDrainUrl`      | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |