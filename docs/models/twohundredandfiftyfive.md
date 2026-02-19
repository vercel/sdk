# TwoHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFive } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFiftyFive = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `edgeConfigId`     | *string*           | :heavy_check_mark: | N/A                |
| `edgeConfigSlug`   | *string*           | :heavy_check_mark: | N/A                |
| `edgeConfigDigest` | *string*           | :heavy_minus_sign: | N/A                |