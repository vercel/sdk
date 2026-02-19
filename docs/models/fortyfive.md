# FortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFive } from "@vercel/sdk/models/userevent.js";

let value: FortyFive = {
  githubLogin: "<value>",
  host: "gentle-mallard.org",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `githubLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `host`             | *string*           | :heavy_check_mark: | N/A                |