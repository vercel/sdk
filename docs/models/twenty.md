# Twenty

The payload of the event, if requested.

## Example Usage

```typescript
import { Twenty } from "@vercel/sdk/models/userevent.js";

let value: Twenty = {
  alias: "<value>",
  deploymentUrl: "https://portly-technician.name",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `alias`            | *string*           | :heavy_check_mark: | N/A                |
| `deploymentUrl`    | *string*           | :heavy_check_mark: | N/A                |