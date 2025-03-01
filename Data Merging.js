export default function mergeData(sessions) {
  const userMap = new Map();
  const res = [];

  for (const session of sessions) {
    const { user, duration, equipment } = session;

    if (userMap.has(user)) {
      const existingSession = userMap.get(user);
      existingSession.duration += duration;
      const combinedEquipment = [...existingSession.equipment, ...equipment];
      existingSession.equipment = Array.from(new Set(combinedEquipment)).sort();
    } else {
      userMap.set(user, { ...session });
      res.push({ ...session });
    }
  }

  const final = [];
  for (const session of res) {
    final.push(userMap.get(session.user));
  }
  return final;
}
