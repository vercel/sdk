# ElasticBuildMachine3

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { ElasticBuildMachine3 } from "@vercel/sdk/models/createprojecthaskey.js";

let value: ElasticBuildMachine3 = {
  cores: 8010.04,
  label: "14cpu-28gb",
  memory: 6489.35,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cores`            | *number*           | :heavy_check_mark: | N/A                |
| `label`            | *"14cpu-28gb"*     | :heavy_check_mark: | N/A                |
| `memory`           | *number*           | :heavy_check_mark: | N/A                |