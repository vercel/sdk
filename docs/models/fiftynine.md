# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/userevent.js";

let value: FiftyNine = {
  domain: "puny-nightlife.com",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `renew`            | *boolean*          | :heavy_minus_sign: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |