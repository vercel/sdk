# NinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFive } from "@vercel/sdk/models/userevent.js";

let value: NinetyFive = {
  instances: 7567.04,
  url: "https://valuable-curl.info",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `instances`        | *number*           | :heavy_check_mark: | N/A                |
| `url`              | *string*           | :heavy_check_mark: | N/A                |