# CreateConnectorCustomEnvironments

## Example Usage

```typescript
import { CreateConnectorCustomEnvironments } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorCustomEnvironments = {
  id: "env_abc123",
  slug: "qa",
};
```

## Fields

| Field  | Type     | Required           | Description                    |
| ------ | -------- | ------------------ | ------------------------------ |
| `id`   | *string* | :heavy_check_mark: | Stable custom environment ID.  |
| `slug` | *string* | :heavy_check_mark: | Current display slug.          |
