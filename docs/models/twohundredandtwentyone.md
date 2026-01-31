# TwoHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyOne } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndTwentyOne = {
  domain: "somber-disposer.name",
  ips: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `ips`              | *string*[]         | :heavy_check_mark: | N/A                |