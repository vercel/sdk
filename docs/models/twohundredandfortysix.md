# TwoHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySix } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFortySix = {
  domain: "considerate-cap.biz",
  ips: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `ips`              | *string*[]         | :heavy_check_mark: | N/A                |