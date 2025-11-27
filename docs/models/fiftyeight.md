# FiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyEight } from "@vercel/sdk/models/userevent.js";

let value: FiftyEight = {
  domain: "indolent-detective.com",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `renew`            | *boolean*          | :heavy_minus_sign: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |