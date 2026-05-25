# ListSandboxesResponseBody

## Example Usage

```typescript
import { ListSandboxesResponseBody } from "@vercel/sdk/models/listsandboxesop.js";

let value: ListSandboxesResponseBody = {
  sandboxes: [],
  pagination: {
    count: 6179.2,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `sandboxes`                                                            | [models.NamedSandbox](../models/namedsandbox.md)[]                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [models.ListSandboxesPagination](../models/listsandboxespagination.md) | :heavy_check_mark:                                                     | N/A                                                                    |