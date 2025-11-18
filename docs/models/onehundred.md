# OneHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundred } from "@vercel/sdk/models/userevent.js";

let value: OneHundred = {
  instances: 7642.14,
  url: "https://spirited-birdbath.name",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `instances`        | *number*           | :heavy_check_mark: | N/A                |
| `url`              | *string*           | :heavy_check_mark: | N/A                |