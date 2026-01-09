# OneHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFive = {
  instances: 1236.74,
  url: "https://tricky-jet.org",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `instances`        | *number*           | :heavy_check_mark: | N/A                |
| `url`              | *string*           | :heavy_check_mark: | N/A                |