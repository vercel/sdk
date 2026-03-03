# FortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyEight } from "@vercel/sdk/models/userevent.js";

let value: FortyEight = {
  gitlabLogin: "<value>",
  gitlabUserId: 7440.01,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitlabLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabUserId`     | *number*           | :heavy_check_mark: | N/A                |